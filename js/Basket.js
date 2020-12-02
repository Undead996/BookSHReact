class Basket extends React.Component{
  constructor(props)  {
    super(props);
    this.getIndexById = this.getIndexById.bind(this)
    this.deleteBasketItem = this.deleteBasketItem.bind(this)
  }

  deleteBasketItem(e){
    e.preventDefault();
    if( confirm('Точно удалить?') ){
      this.props.handleRemoveBasket(e.target.id)
      //console.log(this.props)
    }
  }

  getIndexById(id){
    for(let i in this.props.dataBook){      
      if(id == this.props.dataBook[i].id){
        return i;
      }
    }
  }

  render(){
    const items = [];
    let j = 0;
    let summa = 0;

    for(let i in this.props.items){
      j = this.getIndexById(i);

      summa += this.props.items[i] * this.props.dataBook[j].price;

      console.log(j)
      items.push(
        <div className="basket-item">
          <a href='#'>
            {this.props.dataBook[j].title}
          </a>
         <span>
           Кол-во:{this.props.items[i]}шт
          </span>
         <span>
           {this.props.items[i] * this.props.dataBook[j].price}руб
          </span>
          <a href='#' onClick={this.deleteBasketItem} id={i}>
            Удалить
          </a>
        </div>
      )
    }
    items.push(
      <div className="basket-item">
        <span>Всего на сумму <b>{summa}</b>руб</span>
      </div>
    );

    return <div className='basket'>
        <h3>Корзина</h3>
        {items} 
      </div> ;
  }  
}