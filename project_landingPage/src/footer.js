const footer = () => {
  const footer = document.createElement('footer');
  const body = document.getElementsByTagName('body')[0];


  footer.innerHTML = `    
      <p id="footerText">Made by FOrloski for TOP</p>
  `;

  body.appendChild(footer);
};

export default footer;
