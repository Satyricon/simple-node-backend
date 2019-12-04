#!/bin/bash

ip=$(kubectl get svc -n dev -o json | jq -r .items[0].status.loadBalancer.ingress[0].ip)
result=$(curl -s -o /dev/null -w "%{http_code}" $ip)

if [ $result -eq 200 ]
then
  echo "All is fine"
  exit 0
else
  echo "Test fails"
  exit 1
fi
