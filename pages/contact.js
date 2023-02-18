import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/all-pages/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <meta name='description' content='Our contact page. Please use the form to reach out to us with any questions or suggestions you may have' />
      </Head>
      <div><h1>Contact</h1></div>
      {/* <h2 className={classes.h2}>
        Drecipes is a community focused on healthy recipes and lifestyles. A
        healthy lifestyle starts with good nutrition.
      </h2> */}
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
