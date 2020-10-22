// replace with your repo url
ghpages.publish(
    'public',
    {
      branch: 'master',
      repo: 'https://github.com/jshmllr/jshmllr.github.io.git',
    },
    () => {
      console.log('Deploy Complete!')
    }
  )

  