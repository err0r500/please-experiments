subinclude('///pleasings//js:yarn')

site_third_party_deps = [
    '//third_party/js:@strapi--strapi',
    '//third_party/js:@strapi--plugin-i18n',
    '//third_party/js:@strapi--plugin-users-permissions',
    '//third_party/js:sqlite3',
  ]

yarn_script(
  name='build_site',
  script_name='build',
  srcs=glob([
    'config/*',
    'src/*',
    'public/*',
    'favicon.ico',
  ]),
  deps = site_third_party_deps,
  workspace="",
  outs=['build']
)

yarn_script(
  name='serve_site',
  script_name='start',
  srcs=glob([
    'config/*',
    'src/*',
    'public/*',
    'favicon.ico',
  ]),
  deps = site_third_party_deps + [':build_site'],
  outs=['build', 'node_modules'],
  workspace="",
  binary=True,
)
