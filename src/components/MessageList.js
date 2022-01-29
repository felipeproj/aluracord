import { Box, Text, Image, theme } from "@skynexui/components";
import appConfig from "../../config.json";

export function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      {Boolean(props.mensagens && props.mensagens.length > 0) &&
        props.mensagens.map((mensagem) => {
          return (
            <Text
              key={mensagem.id}
              tag="li"
              styleSheet={{
                borderRadius: "5px",
                padding: "6px",
                marginBottom: "12px",
                hover: {
                  backgroundColor: appConfig.theme.colors.neutrals[700],
                },
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "14px",
                fontWeight: 200,
              }}
            >
              <Box
                styleSheet={{
                  marginBottom: "8px",
                }}
              >
                <Image
                  styleSheet={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "8px",
                    fontFamily: "'Roboto Mono', monospace",
                  }}
                  src={`https://github.com/${mensagem.de}.png`}
                />
                <Text
                  tag="strong"
                  styleSheet={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  {mensagem.de}
                </Text>
                <Text
                  styleSheet={{
                    fontSize: "10px",
                    marginLeft: "8px",
                    color: appConfig.theme.colors.neutrals[300],
                    fontFamily: "'Roboto Mono', monospace",
                  }}
                  tag="span"
                >
                  {new Date().toLocaleDateString()}
                </Text>
              </Box>
              {mensagem.texto.startsWith(":sticker:") ? (
                <Image
                  src={mensagem.texto.replace(":sticker:", "")}
                  styleSheet={{
                    width: "100px",
                    height: "100px",
                  }}
                />
              ) : (
                mensagem.texto
              )}
              {/* {mensagem.texto} */}
            </Text>
          );
        })}
    </Box>
  );
}
