import React from 'react'
import Pager from 'react-pager'

class Pagination extends React.Component {
  constructor(props) {
    super(props)

    this.handlePageChanged = this.handlePageChanged.bind(this)

    this.state = {
      total:       11,
      current:     0,
      visiblePage: 3,
    }
  }

  handlePageChanged(newPage) {
    this.setState({ current : newPage })
  }

  render() {
    return (
      <Pager
        total={this.state.total}
        current={this.state.current}
        visiblePages={this.state.visiblePage}
        titles={{ first: <i className="zmdi zmdi-long-arrow-left"></i>, last: <i className="zmdi zmdi-long-arrow-right"></i>}}
        className="pagination-sm pull-right"
        onPageChanged={this.handlePageChanged}
      />
    )
  }
}
      
export default Pagination