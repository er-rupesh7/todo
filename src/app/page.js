import TodoApp from "./components/TodoApp";

export default function Home() {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <TodoApp />
      </div>

      <footer style={{textAlign:'center',padding:'20px'}}>
        <p>Developed by <a href="https://rupesh-kumar.vercel.app" style={{color:'teal'}}>The Developer</a></p>

      </footer>
    </>);
}