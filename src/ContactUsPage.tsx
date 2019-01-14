import * as React from 'react';
import ContactUs from './ContactUs';
import { ISubmitResult, IValues } from './Form';

interface IState {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

class ContactUsPage extends React.Component<{}, {}> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      reason: '',
      notes: ''
    };
  }

  private handleNameChange = (name: string) => {
    this.setState({ name });
  };
  private handleEmailChange = (email: string) => {
    this.setState({ email });
  };
  private handleReasonChange = (reason: string) => {
    this.setState({ reason });
  };
  private handleNotesChange = (notes: string) => {
    this.setState({ notes });
  };

  private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    await wait(1000); //simulate async web API call
    console.log('am i in handleSubmit?');
    return {
      success: true
    };
  };

  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>If you enter your details we'll get back to you ASAP.</p>
        <ContactUs onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default ContactUsPage;
