# Starter Proj

## Steps to setup and run

1. `bundle install`
2. in database.yml change name of database react_rails_router_starter_f20 to **project-name**
3. `rails db:create db:migrate db:seed`
4. `rails s -p 3001`

5. `cd client && yarn`
6. `yarn start`

### handle git

- you can either remove the remote and add you own, or you can remove the git repo, remove the
  remote keeps the commit history from starter project, and rm -rf .git is going to complete remove
  it/

1.  - remove origin `git remote rm origin`
    - git add remote origin to new repo

2.  or
    `rm -rf .git`
    `git init`
    `git remote add origin new githib page`
    `git add .`
    `git commit -m`
    `git push origin master`
