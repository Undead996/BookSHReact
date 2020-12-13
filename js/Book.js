// function Book(props){    
//     function formatPrice(price){
//         return price ? <b>{price}</b>: <del>&nbsp;</del>;
//     }

//     return <div className="book book-default">
//     <h3>{props["title"]}</h3>
//     <img src={'img/'+props['img']} alt="" />
//     <p>Автор: {props["author"]}</p>
//     <p>Цена: {formatPrice(props["price"])}</p>
//   </div>
// }
  
class Book extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        e.preventDefault();
        console.log(1);
        this.setState({selected: !this.state.selected});
    }
    render(){
    
    //const price =  this.props.price ? <b>{ this.props.price}</b>: <del>&nbsp;</del>;
    const bookClassName = this.state.selected ? "book-selected" :"book-default";
    return <div className={"book "+ bookClassName}>
    <h3>{this.props["title"]}</h3>
    <img src={'img/'+this.props['img']} alt="" width="100" />
    <p>Автор: {this.props["author"]}</p>
    <p>Цена: {this.props.price}</p>
    <p>
        <a 
        className="btn btn-success" 
        href="#"
        onClick={this.handleClick}
        >Сравнить</a>
        <a 
        className="btn btn-success"
        href="#"
        onClick={ (e) => {
           e.preventDefault();
           this.props.handleAddBasket(this.props.id);
        }}
        >В корзину</a>
    </p>
    <p>Оценка:</p><Stars/>
  </div>
    }
}