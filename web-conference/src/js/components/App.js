import React from 'react'
import ListView from './ListView'
import Create from './Create'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ListView: true,
      conferences: {
        id: 1,
        title: 'Title',
        date: 'start_date',
        description: 'description',
        members: [{
          image: 'https://media.platform.co.nl/media/profiles/images/201608/emil-kleur.jpg.240x240_q85_crop.jpg',
          name:'Emil',
          active: true,
          id: '1',
        },
        {
          image: 'https://media.platform.co.nl/media/profiles/images/201710/1916056_iQfXKb8.jpeg.240x240_q85_crop.jpg',
          name: 'Gleb',
          active: false,
          id: '2',
        },
        {
          image: 'https://media.platform.co.nl/media/profiles/images/201701/Schermafbeelding_2017-01-18_om_13.09.42.png.240x240_q85_crop.png',
          name: 'Felicia',
          active: false,
          id: '3',
        }],
        keywords: 'keywords'
      }
    }
  }

  handle() {
    let newListView = this.state.ListView === true ? false : true
    this.setState({ListView: newListView}) 
    let remotes = document.getElementById('remotes')
    if(ListView) {
      remotes.remove()
    }
  }

  render() {
    let text = ''
    let page = null
    let icon = ''
    if(this.state.ListView){
      page = <ListView/>
      text = 'Organize conference'
      icon = 'zmdi zmdi-calendar-check'
    } else {
      page = <Create/>
      text = 'Back to the list'
      icon = 'zmdi zmdi-skip-previous'
    }
    return (
      <div>
        <ul className="c-nav js-nav">
          <li>
            <a className="c-nav__item" href="/timeline/">Activitystream</a>
          </li>
          <li className="teams-nav-item">
            <a className="c-nav__item state-subnav js-nav-teams js-nav-subnav-trigger" href="">
              Channels
              <span className="item-nav-icon js-item-nav-icon"><i className="md md-chevron-right"></i></span>
            </a>
          </li>
          <li>
            <a className="c-nav__item" href="/leden/">Colleagues</a>
          </li>
          <li>
            <a className="c-nav__item" href="/knowledge/question/all">Questions &amp; Answers</a>
          </li>   
          <li className="links-nav-item state-groups-active">
            <a className="c-nav__item state-subnav js-nav-portal js-nav-subnav-trigger">
              Portal
              <span className="item-nav-icon js-item-nav-icon"><i className="md md-chevron-right"></i></span>
            </a>
          </li>
        </ul>
        <ul className="c-breadcrumbs">
          <li><a href="/">Stamkracht</a></li>    
          <li><a href="/groups/">Channels</a></li>
          <li><a href="/stamkracht/">Stamkracht</a></li>
        </ul>
        <div className="s-wrapper__nav">
          <section className="c-sidebar">
            <header className="c-sidebar__heading">
              <div className="c-sidebar__heading-bg"></div>
              <h1>Stamkracht</h1>
            </header>
            <article className="c-sidebar__header">
              <div className="c-sidebar__header-info">
                <p className="amount"><span className="md md-person"></span>16</p>
                <p className="amount"><span className="md md-list"></span>2422</p>
              </div> 
              <form action="/stamkracht/groep/membership/delete" method="post">
                <input type="hidden" name="csrfmiddlewaretoken" value="LbI2N7ftzMd554Zzu2Udy0r4nc5WLOlz1pxsHnBIW5N1UL4yLjgHxMkIhxj9PGpV"></input>
                <button className="c-sidebar__button c-button">
                  Leave Channel
                </button>
              </form>        
            </article>
            <ul className="c-sidebar__nav">
              <li>
                <a className="c-sidebar__nav-item timeline " href="/stamkracht/timeline/">Dashboard</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item tickets state-active" href="/stamkracht/16094/tickets/">Conferences</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item tickets" href="/stamkracht/16094/tickets/">Tickets</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item tickets " href="/stamkracht/16138/teams/">Teams</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item tickets " href="/stamkracht/16180/sprints/">Sprints</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item blog " href="/stamkracht/336/blog/">Weblog</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item blog " href="/stamkracht/13927/blog2/">Tech Articles</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item wiki " href="/stamkracht/337/wiki/">Info</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item survey " href="/stamkracht/338/survey/">Survey</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item tasks " href="/stamkracht/339/tasks/">Tasks</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item files " href="/stamkracht/341/files/">Files</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item ideas " href="/stamkracht/342/ideas/">Ideas</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item calendar " href="/stamkracht/343/kalender/">Kalender</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item games " href="/stamkracht/10950/games/">Games</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item members " href="/stamkracht/groep/leden">People</a>
              </li>
              <li>
                <a className="c-sidebar__nav-item blog " href="/stamkracht/16130/newsletter/">Newsletter</a>
              </li>
            </ul>
          </section>
        </div>
        <li id='remotes' className="app-nav__item" ref={(node) => { this.wrapper = node }}>
          <a className="app-nav__btn app-nav__btn--icon-txt app-nav__btn-lenght o-btn o-btn--1"
            onClick={this.handle.bind(this)}>
            <span className="o-btn__icon--left">
              <span className="md md-lg md-filter-list"><i className={icon}></i></span>
            </span>
            <span>{text}</span>
          </a>
        </li>
        {page}
      </div>
    )
  }
}

export default App
