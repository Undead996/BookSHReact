class AddBookForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        id: 0,
        title: '',
        author: '',
        price: ''
       };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
       e.preventDefault();
       console.log(this.state);
       this.props.addBook(this.state);
       this.setState({
         id: 0,
         title: '',
         author: '',
         price: ''}
         )
    }
    handleChange(e){
       const inputData = {};
       inputData[e.target.name] = e.target.value;
       this.setState(inputData);
       console.log(inputData);
    }
    render(){
        return <form action="" onSubmit={this.handleSubmit}>
        <div>id <input type="text" name="id"
         value={this.state.id}
        onChange={this.handleChange}/></div>
        <div>Название <input type="text" name="title"
         value={this.state.title}
        onChange={this.handleChange} /></div>
        <div>Авторы <input type="text" name="author"
         value={this.state.author}
        onChange={this.handleChange} /></div>
        <div>Цена <input type="text" name="price"
         value={this.state.price}
        onChange={this.handleChange} /></div>
        <div><input type="submit" value="Добавить" /></div>
      </form>
    }
}

//https://vk.com/jsspec