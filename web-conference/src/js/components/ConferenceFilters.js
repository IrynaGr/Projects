import React from 'react'
import DatePicker from 'react-datepicker'
import Checkbox from './Checkbox'
import { classNames } from '../utilities/class'
import moment from 'moment'



class ConferenceFilters extends React.Component {

  constructor(props) {
    super(props) 
    
    let min_datetime, max_datetime
    

    this.state = {
      conferences: [],
      active: false,
      filters: {
        
        min_datetime,
        max_datetime,
      },
    }
            
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }

  handleClickOutside(event) {
    let element = event.target
    let isClickInside = this.wrapper.contains(element)
      || element.className.indexOf('react-datepicker') >= 0
      || element.className.indexOf('label') >= 0
      || (element.parentNode && element.parentNode.className.indexOf('label') >= 0)
    if ( this.state.active && !isClickInside ) {
      this.setState({active: false})
    }
  }

  toggle(event) {
    this.setState({active: !this.state.active})
    event.stopPropagation()
  }

  applyFilters() {
    this.setState({active: false})
    let min_datetime, max_datetime
    if ( !!this.state.filters.min_datetime ) {
      min_datetime = moment(this.state.filters.min_datetime)
    }
    if ( !!this.state.filters.max_datetime ) {
      max_datetime = moment(this.state.filters.max_datetime)
    }
    let filters = {
      ...this.state.filters,
      min_datetime,
      max_datetime,
    }
    this.props.conferenceService.setFilters(filters)
    this.props.refresh()
  }

  resetFilters() {
    this.setState({active: false})
    this.props.conferenceService.setFilters({})
    this.setState({filters: {}})
    this.props.refresh()
  }

  handleOnChangeMinDateTime(min_datetime) {
    let filters = Object.assign(this.state.filters, {min_datetime})
    this.setState({filters})
  }

  handleOnChangeMaxDateTime(max_datetime) {
    let filters = Object.assign(this.state.filters, {max_datetime})
    this.setState({filters})
  }

  handleOnChange(label) {
    this.state.filters[label] = !this.state.filters[label]
    this.setState({filters: this.state.filters})
  }

  renderFilters() {
    return (
      <div className={ classNames('o-subnav filters', {
        'is-active': this.state.active,
      }) }>
        <div className="g-row12">
          
          <div className="g-col12--xs g-col6--md u-marg-bottom">
            <DatePicker
              placeholderText="From"
              dateFormat="YYYY-MM-DD"
              selected={this.state.filters.min_datetime}
              onChange={this.handleOnChangeMinDateTime.bind(this)}
            />
          </div>
          <div className="g-col12--xs g-col6--md u-marg-bottom">
            <DatePicker
              placeholderText="To"
              dateFormat="YYYY-MM-DD"
              selected={this.state.filters.max_datetime}
              onChange={this.handleOnChangeMaxDateTime.bind(this)}
            />
          </div>
          <div className="g-col12--xs u-marg-bottom">
            <div className="u-float-left">
              <Checkbox
                id="has_attachments"
                label="Has attachments"
                active={this.state.filters.has_attachments}
                onChange={() => this.handleOnChange('has_attachments')}
              />
            </div>
          </div>
          <div className="g-col12--xs u-marg-bottom">
            <div className="u-float-left">
              <Checkbox
                id="has_comments"
                label="Has comments"
                active={this.state.filters.has_comments}
                onChange={() => this.handleOnChange('has_comments')}
              />
            </div>
          </div>
          <div className="g-col12--xs u-marg-bottom">
            <div className="u-float-left">
              <Checkbox
                id="me"
                label="Has me"
                active={this.state.filters.me}
                onChange={() => this.handleOnChange('me')}
              />
            </div>
          </div>
          <div className="g-col12--xs u-marg-bottom">
            <div className="u-float-left">
              <Checkbox
                id="is_active"
                label="Active"
                active={this.state.filters.is_active}
                onChange={() => this.handleOnChange('is_active')}
              />
            </div>
          </div>
          <div className="g-col12--xs g-col6--md u-marg-bottom">
            <button className="o-btn o-btn--2 red u-noBoxShadow"
              onClick={this.resetFilters.bind(this)}>
              <span>Reset</span>
            </button>
          </div>
          <div className="g-col12--xs g-col6--md u-marg-bottom">
            <button className="o-btn o-btn--2 green"
              onClick={this.applyFilters.bind(this)}>
              <span>Apply filters</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <li id='filter' className="app-nav__item filter" ref={(node) => { this.wrapper = node }}>
        <a className="app-nav__btn app-nav__btn--icon-txt o-btn o-btn--1"
          onClick={this.toggle.bind(this)}>
          <span className="o-btn__icon--left">
            <span className="md md-lg md-filter-list"><i className="zmdi zmdi-filter-list"></i></span>
          </span>
          <span>Filter</span>
        </a>
        {this.renderFilters()}
      </li>
    )
  }
}

export default ConferenceFilters