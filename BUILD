github_repo(
  name = "pleasings",
  repo = "thought-machine/pleasings",
  revision = "v1.0.0",
)

subinclude('///pleasings//js:yarn')

yarn_script(
  name='build_site',
  srcs=glob([
    'config/*',
    'src/*',
    'public/*',
    'favicon.ico',
  ]),
  deps = [
    '//third_party/js:@strapi--strapi',
    '//third_party/js:@strapi--plugin-i18n',
    '//third_party/js:@strapi--plugin-users-permissions',
    '//third_party/js:sqlite3',
  ],
  workspace="",
)

yarn_script(
  name='run_site',
  script_name='start',
  srcs=[
    'package.json'
  ],
  deps = [
    ':build_site'
  ],
  workspace="",
  binary=True,
  outs=['out']
)
