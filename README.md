# Please experiments

This repo just stores personal experiments about how [Please](https://please.build/)
can be used in projects.

## JS

### Strapi (CMS)
#### generate third party deps
```
cat ./strapi/yarn.lock | plz run @pleasings-1-0-0//js/yarn_deps > ./third_party/js/BUILD
```

NB : we've to use the `pleasing:1.0.0` because other versions fail
```
cat ./strapi/yarn.lock | plz run @pleasings//js/yarn_deps
```

err :
```
Error building target ///pleasings//js/yarn_deps:yarn_deps: exit status 1
yarn install v1.22.17
[1/4] Resolving packages...
[2/4] Fetching packages...
error Can't make a request in offline mode ("https://registry.yarnpkg.com/ssri/-/ssri-6.0.2.tgz")
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```

#### build the site
```
plz build //strapi:build_site
```

#### serve the site
still have to figure out how to do this ...


