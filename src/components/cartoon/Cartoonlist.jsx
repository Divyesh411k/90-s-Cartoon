import React from 'react';
import './tooncard.css'; 
import CartoonCard from './CartoonCard';

const toonsData = [
  {
    name: 'Shinchan',
    image: 'https://www.somagnews.com/wp-content/uploads/2021/02/Shin-Chan-1-1068x601.jpg',
    link: 'https://www.youtube.com/watch?v=4Nt6aLoTyXI&list=PL-FnpQk459L_H1WYSEXXas5OBH37UQXtV&index=2',
  },
 
  {
    name: 'Doremon',
    image: 'https://th.bing.com/th/id/R.76e67a88ac136e41ab9a08a7ad2f8717?rik=DFryc6LBKsv%2foQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f6%2f1%2f774153-doraemon-3d-wallpaper-2018-1920x1080-for-samsung.jpg&ehk=zFIjmVg0aFj8iJDYnmtRMFU1jaVM3u4JE%2bZQUfbeLCI%3d&risl=&pid=ImgRaw&r=0',
    link: 'https://youtu.be/6ouFrcyqi_s?si=8oWoRx8ZGBPYoeU-'
  },
  {
    name: 'Tom and Jerry',
    image: 'https://th.bing.com/th/id/OIP.r5CF0ozmkasO2MtiBe6I2wHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    link: 'https://www.youtube.com/watch?v=SA-jLGx4-cU&list=PLJYf0JdTApCqAbZImkQagXEuByh-b_7To&index=1'
  },
  
  {
    name: 'Haddi mera buddy',
    image: 'https://th.bing.com/th/id/OIP.2nJv03uxDj1H605nluS-BAHaE8?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    link: 'https://youtu.be/6ouFrcyqi_s?si=8oWoRx8ZGBPYoeU-'
  },
  {
    name: 'Zig and Sharko',
    image: 'https://th.bing.com/th/id/OIP.fWbl1-9ekD4aHND4myb5CgHaEo?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    link: 'https://www.youtube.com/watch?v=3laWBXecVRM&list=PLxxK8SS7YiXwsMQkyfE2iZc6tvj3Msn57&index=2'
  },
  {
    name: 'Best of Luck Nikki',
    image: 'https://th.bing.com/th/id/OIP.aKnzLOsOI_WBDI6LguTuAgHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    link: 'https://youtu.be/w_RDE7VK_RQ?list=PLNI8QjOvKl-olCZ6ZHBrvItvHcFHcFmXV&t=0'
  },
  {
    name: 'Shaun The Sheep',
    image: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p01j3cvb.jpg',
    link: 'https://www.youtube.com/watch?v=XywU0VNQGhI&list=PL75WpgEj_KA1mgw3QoqYxY9s3EeJrVOkV&index=1'
  },
  {
    name: 'The Daltons',
    image: 'https://i.ytimg.com/vi/yg7ZPjGWlxA/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=CEQiDiYK0sE&list=PL_0WJai40xdobGDT0_ddVyT8menBWsawR&index=1'
  },

  {
    name: 'Mr. Bean',
    image: 'https://th.bing.com/th/id/OIP.A8qTSU_Zm3wBWjHzX8n5AQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    link: 'https://www.youtube.com/watch?v=XywU0VNQGhI&list=PL75WpgEj_KA1mgw3QoqYxY9s3EeJrVOkV&index=1'
  },
  {
    name: 'Shaun The Sheep',
    image: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p01j3cvb.jpg',
    link: 'https://www.youtube.com/watch?v=XywU0VNQGhI&list=PL75WpgEj_KA1mgw3QoqYxY9s3EeJrVOkV&index=1'
  },
  {
    name: 'Shaun The Sheep',
    image: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p01j3cvb.jpg',
    link: 'https://www.youtube.com/watch?v=XywU0VNQGhI&list=PL75WpgEj_KA1mgw3QoqYxY9s3EeJrVOkV&index=1'
  },
  
];

const Cartoonlist = () => {
  return (
    <div className="clist">
      {toonsData.map((toon, index) => (
        <CartoonCard key={index} toon={toon} />
      ))}
    </div>
  );
};

export default Cartoonlist;
