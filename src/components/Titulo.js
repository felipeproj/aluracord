import appConfig from "../../config.json";

export function Titulo(props) {
  const Tag = props.tag ? props.tag : "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary[100]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
