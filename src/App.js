import './App.css';
import img1 from './images/images.jpg';

function App() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact Us</li>
          <li>Sign Up</li>
          <li>Log in</li>
        </ul>
      </nav>

      <p className="lorem-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat officiis laboriosam quaerat ut aperiam consequuntur doloremque dolorem magni assumenda laborum ad ex eos provident dolorum id neque est animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi ipsa est quidem obcaecati numquam facilis inventore officia at consectetur, aperiam voluptatem impedit itaque nam vel debitis. Saepe, nostrum rem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reiciendis et dolorem eius commodi temporibus rem iste explicabo eaque quisquam nostrum ab, cupiditate iure ratione totam harum perspiciatis praesentium labore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, omnis sint officia voluptate assumenda provident, laborum expedita consequuntur temporibus quos deserunt excepturi incidunt consectetur fuga eum adipisci alias eius perferendis.</p>

      <img className="img2" src={img1} alt="" />

      <img className="img1" src="https://thumbs.dreamstime.com/z/mt-fuji-420-4612948.jpg" alt="" />

    </header>
    </>
  );
}

export default App;
