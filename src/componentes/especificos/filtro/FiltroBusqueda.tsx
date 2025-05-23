import { Box, InputBase, useMediaQuery, Collapse } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTarjetas } from "../../../contextos/DatosAgenciaContext";
import { useDatosGenerales } from "../../../contextos/DatosAgenciaContext";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const FiltroBusqueda = () => {
  const tarjetas = useTarjetas();
  const datosGenerales = useDatosGenerales();

  const theme = useTheme();
  const esMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mostrarInput, setMostrarInput] = useState(false);

  const colorFondo = tarjetas?.color.primario || datosGenerales?.color?.primario || "#1976d2";
  const colorTexto = tarjetas?.tipografiaColor || datosGenerales?.colorTipografiaAgencia || "#fff";
  const colorInputFondo = tarjetas?.color.secundario || datosGenerales?.color?.secundario || "#f0f0f0";

  return (
    <Box
      sx={{
        backgroundColor: colorFondo,
        p: esMobile ? 1.5 : 3,
        borderRadius: 4,
        boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
        textAlign: "center",
        width: "100%",
        maxWidth: esMobile ? "280px" : "100%",
        mx: "auto",
      }}
    >
      {/* 🔹 Encabezado interactivo */}
      <Box
        onClick={() => esMobile && setMostrarInput(!mostrarInput)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
          color: colorTexto,
          fontWeight: "bold",
          fontFamily: " Montserrat",
          fontSize: esMobile ? "0.8rem" : "0.9rem",
          cursor: esMobile ? "pointer" : "default",
          borderRadius: esMobile ? "999px" : 0,
          backgroundColor: esMobile ? `${colorFondo}dd` : "transparent",
          px: esMobile ? 2 : 0,
          py: esMobile ? 0.8 : 0,
          mx: "auto",
          width: "fit-content",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: esMobile ? `${colorFondo}f2` : "inherit",
          },
        }}
      >
        <SearchIcon sx={{ fontSize: esMobile ? 18 : 22 }} />
        Filtrar por Nombres
      </Box>

      {/* 🔹 Input visible solo en desktop o al desplegar en mobile */}
      <Collapse in={!esMobile || mostrarInput}>
        <Box
          sx={{
            mt: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center", // ✅ centra el input
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: colorInputFondo,
              borderRadius: "20px",
              px: 2,
              py: 1,
              width: "100%",
              maxWidth: 240, // ✅ controla el tamaño visual
              boxShadow: "inset 0px 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <InputBase
              placeholder="Seleccionar"
              sx={{
                flexGrow: 1,
                px: 1, // ✅ padding interno del input
                color: tarjetas?.tipografiaColorContenido || "#333",
                fontWeight: "bold",
                fontSize: esMobile ? "0.8rem" : "0.9rem",
                "&::placeholder": {
                  color: `${colorTexto}99`,
                },
              }}
            />
            <SearchIcon
              sx={{
                color: colorTexto,
                fontSize: esMobile ? 18 : 22,
                ml: 1,
              }}
            />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FiltroBusqueda;
