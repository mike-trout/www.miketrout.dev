#!/usr/bin/env bash

# Install gcloud
curl https://sdk.cloud.google.com | bash > /dev/null

# Promote gcloud to PATH top priority (prevent using old version from Travis)
source $HOME/google-cloud-sdk/path.bash.inc

# Make sure kubectl is updated to latest version
gcloud components update kubectl

gcloud auth activate-service-account --key-file gcloud-service-account-secret.json
gcloud container clusters get-credentials gke-cluster --zone us-central1-a --project www-miketrout-dev
kubectl apply -f k8s.yaml
