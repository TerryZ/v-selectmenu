const doSome = function () {
  const div = document.createElement('div')
  div.className = 'v-selectmenu-callback'
  div.innerText = 'This is the test DIV dom'
  document.body.appendChild(div)
}

export const regularBase = [
  { content: '163 NetEase', url: 'http://www.163.com' },
  { content: 'Sina', url: 'http://www.sina.com' },
  { content: 'sm-divider' },
  { content: 'GitHub', icon: 'fab,github', url: 'https://github.com' },
  { content: 'Reddit', icon: 'fab,reddit', url: 'https://www.reddit.com' },
  { content: 'Facebook', icon: 'fab,facebook', url: 'https://www.facebook.com', disabled: true },
  { content: 'Twitter', icon: 'fab,twitter', url: 'https://twitter.com', disabled: true },
  { content: 'sm-divider' },
  { content: 'Click this menu item to trigger your callback', callback: doSome }
]

export const regularWithHeader = [
  { content: 'News Site', header: true },
  { content: '163 NetEase', url: 'http://www.163.com' },
  { content: 'Sina', url: 'http://www.sina.com' },
  { content: 'sm-divider' },
  { content: 'Technology Site', header: true },
  { content: 'GitHub', icon: 'fab,github', url: 'https://github.com' },
  { content: 'Reddit', icon: 'fab,reddit', url: 'https://www.reddit.com' },
  { content: 'Facebook', icon: 'fab,facebook', url: 'https://www.facebook.com', disabled: true },
  { content: 'Twitter', icon: 'fab,twitter', url: 'https://twitter.com', disabled: true },
  { content: 'sm-divider' },
  { content: 'Actions', header: true },
  { content: 'Click this menu item to trigger your callback', callback: doSome }
]

export const regularMultipleLevel = [
  { content: 'Sports news website',
    icon: 'fab,github',
    children: [
      { content: 'Fivb', url: 'http://www.fivb.com/' },
      { content: 'Fifa', url: 'http://www.fifa.com/' },
      { content: 'NBA',
        children: [
          { content: 'NBA official site', url: 'http://www.nba.com' },
          { content: 'Chicago Bulls', icon: 'fab,github', url: 'http://www.nba.com/bulls/' },
          { content: 'Los Angeles Lakers',
            children: [
              { content: 'NBA official site', url: 'http://www.nba.com' },
              { content: 'Chicago Bulls', url: 'http://www.nba.com/bulls/' },
              { content: 'Los Angeles Lakers111', url: 'www.nba.com/lakers/' }
            ] }
        ] }
    ] },
  { content: 'sm-divider' },
  { content: 'News',
    children: [
      { content: 'BBC', url: 'http://www.bbc.com/news' },
      { content: 'CNN', url: 'http://www.cnn.com' },
      { content: 'Xinhua', url: 'http://www.xinhuanet.com' }
    ] },
  { content: 'Technology',
    children: [
      { content: 'Github', url: 'https://github.com' },
      { content: 'StackOverflow', url: 'https://stackoverflow.com/' },
      { content: 'Reddit', url: 'https://www.reddit.com' }
    ] },
  { content: 'Social',
    children: [
      { content: 'Facebook', url: 'https://www.facebook.com' },
      { content: 'Twitter', url: 'https://twitter.com' }
    ] }
]

export const regularGroup = [
  {
    title: 'Sports',
    list: [
      { content: 'Fivb', url: 'http://www.fivb.com/' },
      { content: 'Fifa', url: 'http://www.fifa.com/' },
      { content: 'sm-divider' },
      { content: 'NBA official site', url: 'http://www.nba.com' },
      { content: 'Chicago Bulls', url: 'http://www.nba.com/bulls/' },
      { content: 'Los Angeles Lakers', url: 'www.nba.com/lakers/' }
    ]
  }, {
    title: 'News',
    list: [
      { content: 'BBC', url: 'http://www.bbc.com/news' },
      { content: 'CNN', url: 'http://www.cnn.com' },
      { content: 'sm-divider' },
      { content: 'Xinhua', url: 'http://www.xinhuanet.com' }
    ]
  }, {
    title: 'Technology',
    list: [
      { content: 'Github', url: 'https://github.com' },
      { content: 'StackOverflow', url: 'https://stackoverflow.com/' },
      { content: 'sm-divider' },
      { content: 'Reddit', url: 'https://www.reddit.com' }
    ]
  }, {
    title: 'Social',
    list: [
      { content: 'Facebook', url: 'https://www.facebook.com' },
      { content: 'Twitter', url: 'https://twitter.com' }
    ]
  }
]
