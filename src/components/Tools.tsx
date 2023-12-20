import bootstrapimg from "../assets/bootstrap.svg";
import figmaimg from "../assets/figma.svg";
import gitimg from "../assets/git.svg";
import googlecloudimg from "../assets/googlecloud.svg";
import javascriptimg from "../assets/js.svg";
import muiimg from "../assets/mui.svg";
import nextjsimg from "../assets/next.svg";
import nodeimg from "../assets/node.svg";
import postgresimg from "../assets/postgres.svg";
import reactimg from "../assets/react.svg";
import typescriptimg from "../assets/ts.svg";
import adobexdimg from "../assets/xd.svg";

const Tools = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5rem",
      }}>
      <h1>Toolings</h1>
      <div
        className="icon-parent-div"
        style={{
          display: "flex",
          padding: "20px 40px",
          flexWrap: "wrap",
        }}>
        <img src={javascriptimg} alt="js pic" className="tool-icon" />
      </div>
      <div
        className="icon-parent-div"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "20px 40px",
          gap: "50px",
        }}>
        <img src={typescriptimg} alt="ts pic" className="tool-icon" />
        <img src={reactimg} alt="react pic" className="tool-icon" />
        <img src={nextjsimg} alt="next pic" className="tool-icon" />
      </div>
      <div
        className="icon-parent-div"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "20px 40px",
          gap: "50px",
        }}>
        <img src={muiimg} alt="mui pic" className="tool-icon" />
        <img src={bootstrapimg} alt="bootstrap pic" className="tool-icon" />
        <img src={nodeimg} alt="node pic" className="tool-icon" />
        <img src={postgresimg} alt="postgres pic" className="tool-icon" />
      </div>
      <div
        className="icon-parent-div"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "20px 40px",
          gap: "50px",
        }}>
        <img src={googlecloudimg} alt="cloud pic" className="tool-icon" />
        <img src={gitimg} alt="git pic" className="tool-icon" />
        <img src={figmaimg} alt="figma pic" className="tool-icon" />
      </div>
      <div
        className="icon-parent-div"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "20px 40px",
          gap: "50px",
        }}>
        <img src={adobexdimg} alt="xd pic" className="tool-icon" />
      </div>
    </div>
  );
};

export default Tools;
