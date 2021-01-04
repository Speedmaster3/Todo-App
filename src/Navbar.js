import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";
import { withLanguageContext } from "./contexts/LanguageContext";
import spanishFlag from "./images/spain.png";
import usFlag from "./images/united-states.png";
import frenchFlag from "./images/france.png";

const content = {
  english: {
    search: "Search",
    flag: usFlag,
  },
  french: {
    search: "Chercher",
    flag: frenchFlag,
  },
  spanish: {
    search: "Buscar",
    flag: spanishFlag,
  },
};

function Navbar(props) {
  const { isDarkMode, toggleIsDarkMode } = useContext(ThemeContext);
  const { classes } = props;
  const { language } = useContext(LanguageContext);
  const { search, flag } = content[language];

  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>
              <img src={flag} width="16px" />
            </span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch onChange={toggleIsDarkMode} />
          <div className={classes.grow}></div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// class Navbar extends Component {

//   constructor(props) {
//     super(props);
//   }
//   render() {

//     return (

//     );
//   }
// }

export default withStyles(styles)(Navbar);
