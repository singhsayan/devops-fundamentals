#!/bin/bash

echo "Applying Kubernetes Secrets & ConfigMaps"
kubectl apply -f manifests/k8s-secret.yaml
kubectl apply -f manifests/k8s-configmap.yaml

echo "Deploying PostgreSQL"
kubectl apply -f manifests/postgres-deployment.yaml
kubectl apply -f manifests/postgres-service.yaml

echo "Deploying Node.js App"
kubectl apply -f manifests/app-deployment.yaml
kubectl apply -f manifests/app-service.yaml

echo "Deployment complete"
kubectl get pods
kubectl get svc
