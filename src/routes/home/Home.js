import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Seeking Developers and Founders</h1>
          <p>
            Xanho is under slow and partially-active development.  It is a massive undertaking, with currently only a team
            of one to build it.  Xanho seeks to disrupt today's educational system and its outdated methodologies.  But
            I need your help to do so.
          </p>
          <p>
            We humans, for most of our existence, were largely self-sufficient creatures.  We had to fight for our food, defend
            our territory, and "home-school" our children on how to survive.  Over the last several thousands of
            years, society advanced, and we became a much more cooperative species.  Though this came with numerous
            benefits, it came with one major drawback: we became less self-sufficient.  We now depend on one-another
            for so much of our survival; most people can no longer move off to the mountains and survive.  In many
            cases, this is perfectly fine.  But one aspect of society which requires self-sufficiency is education
            and learning.
          </p>
          <p>
            For many centuries, we have relied on "trickle-down" education, where the teachers were responsible for
            effectively disseminating knowledge and information to students.  This was fine given the technology
            (or lack there-of) at the time; however, while technology and the digital age evolved, our educational
            system did not.  As a result, students are now heavily dependent on teachers for learning new information.
            Students today have the privilege of having information fed to them on a silver spoon.  There's no more
            thinking or exploration.  It's now just an arbitrary bar set by men in fancy suits, with a pre-packaged
            common-core data set that is crammed into the heads of our children.  This all comes at the cost of
            innovation and creative thinking, for both the students and the teachers.  Humans simply can't compete
            when it comes to raw number crunching or memorization; machines win that front.
          </p>
          <p>
            In order to compete with these new machines and artificial intelligences, humans must adapt.  I believe
            that in order to do that, we must venture back to our older, more primitive self-sufficiency.  That's
            not to say we should disregard all of the educational progress we have made, but we do need an evolved
            way of thinking.  We need a teaching system which empowers the students to learn for themselves.  We need
            a teaching system that adapts to the individual rather than teaching on an "average".  We need a teaching
            system which helps the student find dots and connect them together in a sequence best suited for the individual.
            We need a teaching system that doesn't assume every mind is the same; rather, we need one which does
            the exact opposite.  We need Education 2.0.
          </p>
          <p>
            Xanho hopes to do just that.  Xanho hopes to provide students with the tools and guidance they need to
            survive, thrive, and adapt to a dynamic and competitive world.  In the initial version, Xanho seeks to
            partner with existing institutions, such as public K12 districts, private schools, and universities.
            The Xanho platform would then provide teachers in these institutions with the Xanho platform, tools, and computed data.
          </p>
          <p>
            Building such a platform is no easy task.  Forming an organization around the project will also be necessary.
            I, as a lone-wolf, can't do it all.  I need your help.  Are you a developer, educator, startup incubator,
            entrepreneur, or otherwise someone just interested in contributing?  Contact me at: sean -at- xanho -dot- org.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
