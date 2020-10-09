const header = () => {
  const header = document.createElement('header');
  const body = document.getElementsByTagName('body')[0];

  header.innerHTML = `    
    <li><a href="#">HOME</a></li>
    <li><a href="#">ABOUT</a></li>
    <p id="logo">/_</p>
    <li><a href="#">PROJECTS</a></li>
    <li><a href="#">CONTACT</a></li>
  `;

  body.appendChild(header);
};

export default header;
