import { ThemeContextProvider, themeContext } from './theme-context';
import { cocktailContext } from './cocktail-context';

// const url = 'https://uncovered-treasure-v1.p.rapidapi.com/topics';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/octet-stream',
// 		'X-RapidAPI-Key': 'a42ec88b2amsh123640a96506b09p1c2027jsnaf92d7010eea',
// 		'X-RapidAPI-Host': 'uncovered-treasure-v1.p.rapidapi.com'
// 	}
// };

const searchUrl = 'https://duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com/?q=DuckDuckGo&callback=process_duckduckgo&no_html=1&no_redirect=1&skip_disambig=1&format=json';
const searchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a42ec88b2amsh123640a96506b09p1c2027jsnaf92d7010eea',
		'X-RapidAPI-Host': 'duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com'
	}
};

const YOUTUBE_API_KEY = "AIzaSyC0UFgl5a4CmTucspk4JLVICNMBFD0TJRE";

const baseUrl = "https://youtube.googleapis.com/youtube/v3";


// render(){
//   return <ComponentA />
// }

class ComponentA extends React.Component{
  constructor(props){
    super(props);
    this.state = {theme: "light"};
    this.setThemeValue = this.setThemeValue.bind(this);
  }

  setThemeValue(){
    console.log(this);
    this.setState({theme: "dark"});
  }

  render(){
    console.log("ComponentA render");
    return <><ThemeContextProvider value={{theme: this.state.theme, setThemeValue: this.setThemeValue}}>
      <ComponentB />
      <ComponentC/>
    </ThemeContextProvider>
    </>
  }
}

class ComponentB extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log("ComponentB render");
    return <h1>Component B</h1>
  }
}

class ComponentC extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <>
      <h1>ComponentC theme is {this.context.theme}</h1>
      <button onClick={this.context.setThemeValue}>change theme</button>
    </>
  }
}

ComponentC.contextType = themeContext;




// class UserDetailsComponent extends React.Component{
//   constructor(){
//     super();
//     this.state = {inputValue: "", showTypedSection: false, color: "red"};
//     this.handleClick = this.handleClick.bind(this);
//     this.changeColor = this.changeColor.bind(this);
//   }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("next state",nextState);
  //   console.log("current state",this.state.color);
  //   if(nextState.color === this.state.color){
  //     return true
  //   }
  // }

//   changeColor(){
//     this.setState({color: "green"});
//   }

//   handleClick(){
//     this.setState({showTypedSection: true});
//   }

//   render(){
//     return (<>
//       <input type="text" value={this.state.value} onChange={(e)=> this.setState({inputValue: e.target.value})}/>
//       <button onClick={this.handleClick}>show typed value</button>
//       {this.state.showTypedSection && (
//         <>
//       <UserContextProvider value={this.state.inputValue}>
//         <ThemeContextProvider value={{color: this.state.color, changeColor: this.changeColor}}>
//           <MiddleComponent/>
//           <DemoComponent/>
//         </ThemeContextProvider>
//       </UserContextProvider>
//     </>
//       )}
//     </>)
//   }
// }

// class ButtonComponent extends React.Component{
//   render(){
//     console.log("ButtonComponent render");
//     return (<button style={{backgroundColor: this.context.color}} onClick={this.context.changeColor}>click to change theme</button>)
//   }
// }

// ButtonComponent.contextType= themeContext; // contextType helps react component to use the context. The context is available in this.context after we assign what type of context the Component wants to use



// class DisplayTypedValueComponent extends React.Component{
//   render(){
//     console.log("DisplayTypedValueComponent render");
//     return (<p>Typed value is:{this.context}</p>)
//   }
// }

// DisplayTypedValueComponent.contextType = userContext; // contextType property tells react that this Component wants to consume this type of context and react provides that current context value to this.context

// class MiddleComponent extends React.Component{
//   render(){
//     console.log("MiddleComponent render");
//     return <>
//       <DisplayTypedValueComponent color={this.context.color}/>
//       <ButtonComponent/>
//     </>
//   }
// }

// MiddleComponent.contextType = themeContext;

// class DemoComponent extends React.Component{
//   render(){
//     console.log("DemoComponent render")
//     return <h1>Demo Component</h1>
//   }
// }


// constructor(){
//   super();
// }



// class Login extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {inputValue: ""};
//   }

//   render(){
//     console.count("Login render");
//     console.log(this.state.inputValue);    
//     return <>
//       <h1>Login Page</h1>
//       <form onSubmit={(e)=>{
//         e.preventDefault();
//         this.props.setLogin(this.state.inputValue)
//         }}>
//         <input type="text" value={this.state.inputValue} onChange={(e)=> this.setState({inputValue: e.target.value})}/>
//         <button type="submit">Login</button>
//       </form>
      
//     </> 
//   }
// }


// class Dashboard extends React.Component{

//   constructor(props){
//     super(props);
//     console.log(this.props);
//   }

//   render(){
//     console.log("Dashboard render")
//     return <>
//       <h1>Dashboard Page</h1>
//       <h2>Hello {this.context.userName}</h2>
//       <button onClick={this.props.setLogin}>Logout</button>
//     </>
//   }
// }

//Dashboard.contextType = userContext; // contextType property helps Component to access the current context value. We assign the context instance to tell react to use this type of context and react automatically assigns that context to this.context

// static contextType = userContext; // userContext helps the Component to consume the context value provided by it's Provider Component through this.context. contextType property helps Component to consume which type of context value

//   constructor(){
//     super();
//     this.state = {loggedIn: true};
//     this.setLogin = this.setLogin.bind(this);
//   }

//   setLogin(inputValue){
//     const { setUserName, userName } = this.context;
//     if(!userName){
//       setUserName(inputValue)
//     }
//     else{
//       setUserName("");
//     }
//     this.setState((prevState)=>{
//       return {loggedIn: !prevState.loggedIn}
//     })
//   }

//   render(){
//     console.count("App render");
//     return (
//       <>
//         {this.state.loggedIn ? <Login setLogin={this.setLogin}/> : 
//         <Dashboard setLogin={this.setLogin}/>
//         }
//       </>
//     )
//   }


class DisplayUI extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return <h1>{this.props.displayText}</h1>
  }
}


// constructor(){
//   super();
//   this.state = {count: 0, info: {name: "", lastName: ""}}
//   this.setInfo = this.setInfo.bind(this);
// }

// // componentDidMount(){
// //   this.timerId = setInterval(()=>{
// //     this.setState((prevState)=>{ // The prevState keeps track of new updates and updates it's own state according to the new updates so that it will be used when required                                // The state of the previous state is updated first in order to give state update accurately // this.state should be used inside render() method instead of event handlers as state update is asynchronous we may not get the desired value of the state. 
// //       return {count: prevState.count + 1}  // count: 1
// //                                            // count: 2
// //                                            // display count: 3 store count:3
// //                                            // display count: 4 store count:4
// //     }) 
// //   }, 1000)
// // }

// setInfo(){
//   this.setState({info: {name: "john", lastName: "doe"}});
// }

// componentWillUnmount(){
//   clearInterval(this.timerId);
// }

// shouldComponentUpdate(nextProps, nextState){
//   if(nextState.info !== this.state.info){
//     return true;
//   }
// }

// // we should not use this.state as previous state in multiple setState. When react sees multiple setState instead of updating the state it merges the updates into a single update
// // so depending on this.state will give unexpected state values

// // we should not use this.state in setIntervals that runs in a short time, the state may not be updated and will give you unexpected state values

// componentDidUpdate(){
//   if(this.state.count > 9){
//     this.setState({count: 0});
//   }
// }


// render(){
//   console.log(this.state.count);
//   return <>
//     Timer: {this.state.count}
//     <button onClick={()=> this.setState({count: 0})}>reset</button>
//     <button onClick={this.setInfo}>add info</button>
//     {JSON.stringify(this.state.info)}
//   </>
// }

// constructor(){
//   super();
//   this.state = {name: "", roles: {}, roleList: [], count: 1, lastName: ""};
//   this.updateInfo = this.updateInfo.bind(this);
// }

// updateInfo(){
//   // prevState keeps track on the previous state as well as the latest updates going to be applied on state, whenever new updates are applied the state of the prevState is changed based on that update so in the next call react passes the updated prevState so that the user can use the prevState for the next state updation. It helps in preserving state value so that the updates will be accurate or set according to the user's expected output
//     this.setState({name: "john"});
//     this.setState({lastName: "doe"});
//     this.setState((prevState)=>{
//       return prevState;
//     })

//   // this.setState({count: this.state.count + 1});
//   // this.setState({count: this.state.count + 2});
//   // this.setState((prevState)=>{
//   //   console.log(prevState);
//   //   return prevState;
//   // })
// }

// render(){
//   console.log("info", this.state);
//   return(
//     <>
//       <div>count: {this.state.count}</div>
//       <div>roles: {JSON.stringify(this.state.roles)}</div>
//       <div>roleList:</div>
//       <button onClick={this.updateInfo}>Load User</button>
//     </>
//   )
// }

// constructor(){
//   super();
//   this.state = {count : 0};
//   this.startTimer = this.startTimer.bind(this);
// }

// startTimer(){
//   setInterval(()=>{
//    this.setState((prevState)=>{
//     return {count: prevState.count + 1}
//    })
//    this.setState((prevState)=>{
//     return {count: prevState.count + 2}
//    })
//   }, 1000);
// }

// render(){
//   return <>
//   Timer: {this.state.count}
//   <button onClick={this.startTimer}>start timer</button>
//   </>
// }

// constructor(){
//   super();
//   this.state = {quantity: 1, count: 0, moreInfo: {country: "india", state: "odisha"}};
//   this.updateQuantity = this.updateQuantity.bind(this);
// }

// updateQuantity(){
//   this.setState((state)=>{
//     return {quantity: state.quantity + 1}
//   })
// }

// setMultipleState(){
//   this.setState({quantity: this.state.quantity + 1});
//   this.setState((state)=>{
//     console.log(state.quantity);
//     return {quantity: state.quantity + 1}
//   })
// }

// render(){
//   console.log(this.state.quantity);
//   return <>
//             <button onClick={()=> this.setMultipleState()}>set multiple state</button>
//             <button onClick={()=> this.updateQuantity()}>update quantity</button>
//           </> 
// }

// constructor(){
//   super();
//   this.state = {count: 0};
// }

// startTimer(){
//   this.timerId = setInterval(()=>{
//     this.setState((state)=>{
//       return {count: state.count + 1}
//     })
//   }, 2000)
// }

// render(){
//   console.log(this.state.count);
//   return <>
//     Timer: {this.state.count}
//     <button onClick={()=>this.startTimer()}>start timer</button>
//   </>
// }

// constructor(){
//   super();
//   this.state = {inputValue: "", searchList: [], displayUI: true, displayText: "Loading..."}
//   this.ulRef = createRef();
//   this.displayUIRef = createRef();
// }

// componentDidMount(){
//   console.log(this.displayUIRef.current);
//   console.log("called after Component is inserted in the DOM");
//   fetch(`${baseUrl}/search?part=snippet&q=${this.state.inputValue}&maxResults=50&key=${YOUTUBE_API_KEY}`)
//   .then((res)=> res.json())
//   .then((data)=> {
//     console.log(data);
//     if(data?.error?.code){
//       this.setState({displayText: `failed to fetch ${data.error.code} code`});
//     }
//     else{
//       this.setState({searchList: data.items, displayUI: false})
//     }
//   })
// }

// componentDidUpdate(prevProps, prevState){ // called automatically when the DOM is updated according to the latest VDOM render()
//   console.log("called when component is updated according to latest render() but before browser rendering");
//   if(this.ulRef.current){
//     this.ulRef.current.style.listStyleType="none";
//   }
//   if(prevState.inputValue !== this.state.inputValue){
//     console.log(this.state.inputValue);
//     fetch(`${baseUrl}/search?part=snippet&q=${this.state.inputValue}&maxResults=50&key=${YOUTUBE_API_KEY}`)
//     .then((res)=> res.json())
//     .then((data)=>{
//       if(data?.error?.code){
//         this.setState({displayText: `failed to fetch ${data.error.code} code`, displayUI: true})
//       }
//       else{
//         this.setState({searchList: data.items})
//       }
//     })
//   }
// }

// render(){
//   return (
//     <>
//       <input type="text" placeholder="search" value={this.state.inputValue} 
//       onChange={(e)=> this.setState({inputValue: e.target.value})}/>
//       {this.state.displayUI ? <DisplayUI ref={this.displayUIRef} displayText={this.state.displayText}/> : <ul ref={this.ulRef}>{this.state.searchList.map((searchItem)=>{
//         return <li key={searchItem.id.videoId}>{searchItem.snippet.title}</li>
//       })}</ul>}
//     </>
//   )
//}



// constructor(){
//   super();
//   this.state = {favoriteColor: "red", users: [], loading: true};
//   this.ulRef = createRef(null);
// }

// componentDidMount(){ //called automatically when the component is inserted in the DOM for the first time but the browser has not shown the component
//   console.log("called when component is created for the first time")
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res)=> res.json())
//   .then((data)=> {
//     console.log(data);
//     this.setState({users: data, loading: false})
//   })
// }

// componentDidUpdate(prevProps, prevState){
//   if(prevState.users !== this.state.users){
//     this.ulRef.current.style.listStyleType="none";
//   }
// }

// render(){
//   console.log("render called before component mounting");
//   return <>
//     <h1 ref={this.h1Ref}>My favorite color is {this.state.favoriteColor}</h1>
//     {this.state.loading ? "Users loading" : <ul ref={this.ulRef}>{this.state.users.map((user)=>{
//       return <li key={user.id}>{user.name}</li>
//     })}</ul>
//     }
//   </>
// }

// constructor(){
//   super();
//   this.state = {count: -1, indexList: []}
//   this.dataList = [];
//   this.h1Ref = createRef();
// }

// componentDidMount(){ // DOM is created for the first time according to the first render() call but the browser is not updated
//   console.log("called only once");
//   this.h1Ref.current.style.color="red";
//   this.setState((state)=>{
//     return {count: state.count + 1};
//   });
//   this.timerId = setInterval(()=>{
//     this.setState((state)=>{
//       return {count: state.count + 1}
//     })
//   }, 1000);
// }

// componentDidUpdate(prevProps, prevState){ // DOM is updated according to the VDOM but not updated in the browser
//   console.log("I get called after DOM mutation but before browser updation");
//   console.log(this.state.count);
//   if(prevState.count !== this.state.count){
//     if(this.state.count === 10){
//       this.setState({count: 0});
//     }
//   }
// }





// // componentDidUpdate(prevProps, prevState){
// //   console.log("called after component mount but before screen update");
// //   if(prevState.count !== this.state.count){
// //     for(let i = 0; i< 10; i++){
// //       this.dataList.push(i);
// //     }
// //     this.setState({indexList: this.dataList})
// //   }
// // }

// componentWillUnmount(){
//   clearInterval(this.timerId);
// }

// render(){
//   console.log("rendered");
//   return <>
//           <h1 ref={this.h1Ref}>Timer</h1>
//           count: {this.state.count}
//           <button onClick={()=> clearInterval(this.timerId)}>stop timer</button>
//           {this.state.indexList.map((list)=>{
//             return <p key={list.id}>{list.id}</p>
//           })}
//         </>
// }

// Mounting- 1         1  
// updating  2         2


// constructor(props){
//     super(props);
//     this.state = {count: 0, books: ["book1", "book2", "book3"], inputValue: "", searches: []}
//     this.increaseCount = this.increaseCount.bind(this);
//     this.fetchBooks = this.fetchBooks.bind(this);
//   }

//   increaseCount(){
//     this.setState({count: this.state.count + 1});
//   }

//   fetchBooks(){
//     fetch(url, options)
//     .then((res)=> res.json())
//     .then((data)=> this.setState({books: data.results}))
//   }

//   componentDidMount(){
//     console.log("called only once");
//     fetch(url, options)
//     .then((res)=> res.json())
//     .then((data)=> this.setState({books: data.results.slice(0, 10)}))
//   }

//   componentDidUpdate(prevProps, prevState){
//     if(prevState.inputValue !== this.state.inputValue){
//       fetch(`https://bing-web-search1.p.rapidapi.com/search?q=${this.state.inputValue}&mkt=en-us&safeSearch=Off&textFormat=Raw&freshness=Day`, searchOptions)
//       .then((res)=> res.json())
//       .then((data)=> {
//         console.log(data);
//         this.setState({searches: data?.value?.length > 0 && data.value})
//       });
//     }
//   }

//   render(){
//     console.log(this.state.searches.length);
//     console.count("render method");
//     return (
//       <>
//         <h1>{this.props.text}</h1>
//         Count: {this.state.count}
//         <button onClick={this.increaseCount}>increase count</button>
//         <Pw pwProp={this.props.text}/>
//         <button onClick={this.fetchBooks}>fetch books</button>
//         <ul>{this.state.books.map((book)=>{
//           return <li>{book}</li>
//         })}</ul>
//         <input type="text" value={this.state.inputValue} 
//         onChange={(e)=> this.setState({inputValue: e.target.value})}/>
//         {this.state.searches.length > 0 &&
//         <> 
//           <h1>Common Searches for {this.state.inputValue}:</h1>
//           {this.state.searches.map((searchObj)=>{
//             return <p key={searchObj.name}>{searchObj.name}</p>
//           })}
//         </>
//         }
//       </>
//     )
//   }