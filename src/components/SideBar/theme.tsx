import { createTheme, Theme } from "@mui/material";

const createLocalTheme = (mainTheme: Theme) =>
  createTheme({
    ...mainTheme,
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: mainTheme.palette.divider,
            width: "100%",
            height: 1,
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",

            "&[role='menu']": {
              color: mainTheme.palette.text.primary,
              gap: 10,
              alignItems: "center",
              minWidth: 204,
              maxWidth: 204,
            },
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            width: "100%",
            justifyContent: "center",
            padding: 0,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            color: mainTheme.palette.text.primary,
            width: "100%",
            maxHeight: 40,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
          },
        },
      },

      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: mainTheme.palette.text.primary,
            padding: 0,
            height: 24,
            width: 24,
            minWidth: "24px !important",
            maxWidth: "24px !important",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: mainTheme.palette.text.primary,
            gap: 10,
            alignItems: "center",
            minWidth: 190,
            maxWidth: 190,
            borderRadius: 8,
          },
        },
      },

      MuiAvatar: {
        styleOverrides: {
          root: {
            width: 36,
            height: 36,
            cursor: "pointer",
          },
        },
      },
      MuiStack: {
        styleOverrides: {
          root: {
            padding: 8,
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          },
        },
      },
      //   MuiToolbar: {
      //     styleOverrides: {
      //       root: {
      //         height: "unset",
      //         minHeight: "unset !important",
      //       },
      //     },
      //   },
    },
  });

export { createLocalTheme };
