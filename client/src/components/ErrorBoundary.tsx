import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--paper)] p-8">
          <div className="flex w-full max-w-lg flex-col items-center text-center">
            <h1 className="section-title text-4xl">Something went wrong.</h1>
            <p className="mt-5 text-base leading-7 text-[var(--ink)]/62">
              Please reload the page. If the problem continues, email{" "}
              <a href="mailto:jon@inmarketlab.com" className="underline underline-offset-4">
                jon@inmarketlab.com
              </a>
              .
            </p>
            <button type="button" className="button button-primary mt-8" onClick={() => window.location.reload()}>
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
