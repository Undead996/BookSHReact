class BookWithoutPrice extends React.Component {    
    render(){      
    return <div className={"book book-default"}>
    <h3>{this.props["title"]}</h3>
    <img src={'img/'+this.props['img']} alt="" width="100" />
    <p>Автор: {this.props["author"]}</p>
    {/*<p>Цена: <del>&nbsp;</del></p>*/}
  </div>
    }
}