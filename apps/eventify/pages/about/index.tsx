import { Button } from '@reactverse-ui';

const About = () => {
  return (
    <div>
      hello from about! <br />
      <Button onClick={() => alert('new button')} />
    </div>
  );
};

export default About;
