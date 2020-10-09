const contentHome = () => {
  const content = document.createElement('div');
  const body = document.getElementsByTagName('body')[0];

  content.id = 'content';

  content.innerHTML = `    
    <p>WE TAKE CARE OF YOU<br>BY TAKING CARE OF YOUR HOME</p>
  `;

  body.appendChild(content);
};

export default contentHome;