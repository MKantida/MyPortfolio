
import React, { Component } from 'react';
import profilepic from '../img/profile1.jpg';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Kantida', 'I am a Web Developer']} speed={50} eraseDelay={100} className="typingeffect" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum nostrum dolores nulla nobis aspernatur recusandae dicta non hic fugiat corrupti ipsa asperiores quos ab et, earum a nemo blanditiis? Consectetur cum officiis vitae eius, quasi at cupiditate, iste eos facere ipsam aut dignissimos ab impedit placeat est corporis quidem, rem obcaecati ad error quas quod laborum accusamus? Adipisci et quo est minus ea veritatis magni vitae animi aut modi minima maiores, dicta aspernatur autem deleniti fuga dolore nam deserunt ratione. Soluta nesciunt ullam, quis quos magni maiores quo nihil, rerum enim ipsum consequatur numquam perferendis illo? Possimus, illum? Facere officia quam eaque expedita mollitia nulla aliquam quasi rerum iusto molestiae voluptates laboriosam sequi iure debitis vel quos ullam, voluptatibus veritatis enim dolores quod. Cupiditate atque eum corrupti labore iure quisquam numquam deserunt quas architecto voluptas repudiandae earum similique ullam modi, sapiente saepe expedita ipsum. Nisi ratione deleniti, nobis fugit excepturi facere reprehenderit non quam aut magni esse aspernatur dignissimos officia voluptates consectetur vero enim sapiente distinctio aliquam laboriosam minima animi ex est. Voluptatem corrupti minus odit in nihil ipsa perspiciatis distinctio, laborum tenetur eveniet veniam eligendi alias. Atque, exercitationem quisquam corporis sunt minima harum ut deserunt sint at placeat?</p>

                <Social />
            </div>
        );
    }
}

export default Home;