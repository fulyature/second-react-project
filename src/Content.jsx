import "./Content.css"
import spring from "./img/spring.webp"
const Content = () => {
    const imgStyle={
        borderRadius:"20px",
        width:"400px",
        cursor:"pointer",
        display:"block",
        margin:"auto"
    }
  return (
 <main>
    <h2 style={{color:"white", backgroundColor:"purple"}}>REACT JS</h2>
    <p>React is JS library </p>
    <img style={imgStyle} src="https://cdn.pixabay.com/photo/2023/06/28/21/48/dragonfly-8095243_1280.jpg" alt="spring"/>
    <img style={imgStyle} src="https://cdn.pixabay.com/photo/2022/03/13/12/00/hydrangeas-7065907_1280.jpg" alt="" />
    <img src={spring} alt="spring" />
    <img src="./assets/flower.webp" alt="flower" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem architecto nam voluptatum laborum quidem est sint obcaecati quo quasi?</p>
    <h4>Bu bir h4 dür</h4>
    <h3 className="content-h3">Bu bir h3 elementtir</h3>
 </main>
  )
}

export default Content