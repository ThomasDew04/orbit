// An array of objects. Each object holds a description and an image of a planet.
import mercury from '../images/mercury.png';
import venus from '../images/venus.png';
import earth from '../images/earth.png';
import mars from '../images/mars.png';
import jupiter from '../images/jupiter.png';
import saturn from '../images/saturn.png';
import uranus from '../images/uranus.png';
import neptune from '../images/neptune.png';


const planetInfo = [
    {
        name: 'Mercury',
        description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun\'s planets. It is named after the Roman god Mercurius (Mercury).',
        image: mercury
    },
    {
        name: 'Venus',
        description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth\'s night sky after the Moon, Venus can cast shadows and can be visible in daylight.',
        image: venus
    },
    {
        name: 'Earth',
        description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth\'s surface is land consisting of continents and islands. The remaining 70.8% is covered with water.',
        image: earth
    },
    {
        name: 'Mars',
        description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        image: mars
    },
    {
        name: 'Jupiter',
        description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
        image: jupiter
    },
    {
        name: 'Saturn',
        description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.',
        image: saturn
    },
    {
        name: 'Uranus',
        description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. It contains bulk chemical compositions which differ from that of the larger gas giants.',
        image: uranus
    },
    {
        name: 'Neptune',
        description: 'Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth.',
        image: neptune
    }
];

export default planetInfo;