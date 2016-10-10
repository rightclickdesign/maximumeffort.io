#! /bin/bash

# Ansible Wrapper Script
# August 11, 2016

deploy_staging()
{ 
  ansible-playbook -i deploy/staging deploy/deploy.yml
  return 
}

deploy_production()
{ 
  ansible-playbook -i deploy/production deploy/deploy.yml --ask-vault-pass
  return 
}


# Parse command line arguments
# If no argument is passed, defaults to staging deployment
case "$1" in
  staging|"")
    deploy_staging
    ;;
  production|prod)
    deploy_production
    ;;
  *)
    deploy staging
    ;;
esac

exit 0
