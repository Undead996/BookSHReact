// function App(props){
//        /* Array.prototype.map() принимает функцию обратного вызова и вызывает её для каждого элемента исходного массива. И из значений, которые возвращает каждая функция формируется новый массив*/     
      
//       const books = props.dataBook.map( book => (
//         <Book 
//           key={book.id}
//           id={book.id}
//           title={book.title}
//           author={book.author}
//           img={book.img}
//           price={book.price}
//         />
//       ));
      
//     return books;
// }

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          dataBook: props.dataBook,
          items: {}
        };

        /*setTimeout(()=>{
          this.setState({
              dataBook: dataBook.slice().concat({
                  id: 20,
                  title: '21121',
                  author: '21121',
                  price: null,
                  img: ''
              })
          })
        },5000);*/

        this.removeBasket = this.removeBasket.bind(this);
        this.addBook = this.addBook.bind(this);
        this.sortBook = this.sortBook.bind(this);
    }
    
  addBook(book){
    let newState = this.state.dataBook.slice(0);
    newState.push(book);
    this.setState({dataBook:newState});
  }
  sortBook(f){
    let newState = this.state.dataBook.slice(0);
    newState.sort(function(a,b){
      if(f>0){
        return a.price - b.price;
      }
      if(f<0){
        return b.price - a.price;
      }
      if(f==0){
        return a.id - b.id;
      }
    });
    this.setState({dataBook:newState});
  }
  addBasket = (id) => {
    const items = Object.assign({}, this.state.items);
    items[id] = id in items ? items[id] + 1: 1;
    this.setState( {items} );
    console.log(items);
  }

  removeBasket(id){
    const items = {};

    for(let i in this.state.items){
      console.log(i, id, this.state.items);
      if( id != i ){
        items[i] = this.state.items[i];
      }
    }

    this.setState( {items} )
  }
    render(){
     const books = this.state.dataBook.map( book => (
        book.price ? 
        <Book 
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          img={book.img}
          price={book.price}
          handleAddBasket={this.addBasket}        
        /> :
        <BookWithoutPrice 
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        img={book.img}
        price={book.price}
      />        
      ));
      
     return <div className="app">
       <h2>Корзина</h2>
       <Basket
        items={this.state.items}
        dataBook={this.state.dataBook}
        handleRemoveBasket={this.removeBasket}
        />
       <h2>Добавить книгу</h2>
       <AddBookForm addBook={this.addBook}/>
       <SortBook
        sortBook={this.sortBook}/>
       {books};
     </div>
    }
}

//atarasov@specialist.ru
//тема: квест react1 Фамилия Имя Отчество 29.11.2020
//тело:

/*
- задание 1 неделя (с исправлениями)
- тело и тему переписки не меняем
- вопросы не задаём 
- решение присылать ссылкой на codepen.io
- не писать чаще раза в неделю одинаковые письма
*/