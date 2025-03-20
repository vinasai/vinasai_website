import React, { Component, RefObject } from "react";

// Add type definition for the Trustpilot global object
declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, forceReload?: boolean) => void;
    };
  }
}

// Define interface for TrustBox props
interface TrustBoxProps {
  trustBoxRef: RefObject<HTMLDivElement>;
}

const TrustBox: React.FC<TrustBoxProps> = ({ trustBoxRef }) => (
  <div
    ref={trustBoxRef}
    className="trustpilot-widget"
    data-locale="en-US"
    data-template-id="56278e9abfbbba0bdcd568bc"
    data-businessunit-id="67dafec107f885f02f1e78b0"
    data-style-height="52px"
    data-style-width="100%"
  >
    <a
      href="https://www.trustpilot.com/review/vinasai.ca"
      target="_blank"
      rel="noopener"
    >
      Trustpilot
    </a>
  </div>
);

class TrustBoxContainer extends Component {
  private trustBoxRef: RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.trustBoxRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount(): void {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot && this.trustBoxRef.current) {
      window.Trustpilot.loadFromElement(this.trustBoxRef.current, true);
    }
  }

  render(): React.ReactNode {
    return <TrustBox trustBoxRef={this.trustBoxRef} />;
  }
}

export default TrustBoxContainer;
