#!/usr/bin/env bash

# Exit with an error if any part of the script fails
set -e

# Install gcloud
# curl https://sdk.cloud.google.com | bash > /dev/null
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
sudo apt-get install apt-transport-https ca-certificates gnupg -y
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
sudo apt-get update -y && sudo apt-get install google-cloud-sdk kubectl -y

# Promote gcloud to PATH top priority (prevent using old version from Travis)
# source $HOME/google-cloud-sdk/path.bash.inc

# Make sure kubectl is updated to latest version
# gcloud components update kubectl

gcloud auth activate-service-account --key-file gcloud-service-account-secret.json
gcloud container clusters get-credentials gke-cluster --zone us-central1-a --project www-miketrout-dev
kubectl apply -f www-miketrout-dev-deployment.yaml \
  -f www-miketrout-dev-service.yaml \
  -f www-miketrout-dev-certificate.yaml \
  -f www-miketrout-dev-ingress.yaml

# https://github.com/kubernetes/kubernetes/issues/27081#issuecomment-238078103
kubectl patch deployment www-miketrout-dev-deployment \
  -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"
