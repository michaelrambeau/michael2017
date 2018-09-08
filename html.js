import React from "react";
import Helmet from "react-helmet";
import { TypographyStyle } from "react-typography";
import typography from "./src/utils/typography";

class Html extends React.Component {
  render() {
    const head = Helmet.rewind();

    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!./public/styles.css")
          }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          {css}
        </head>

        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

export default Html;
