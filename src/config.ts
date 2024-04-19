export type ConfigProps = {
    Sidebar_drawer: any;
    Customizer_drawer: boolean;
    mini_sidebar: boolean;
    setHorizontalLayout: boolean;
    setRTLLayout: boolean;
    actTheme: string;
    inputBg:string;
    boxed: boolean;
    setBorderCard: boolean;
};

const config: ConfigProps = {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    mini_sidebar: false,
    setHorizontalLayout: false, // Horizontal layout
    setRTLLayout: false, // RTL layout
    // actTheme: 'ORANGE_THEME',
    // inputBg: 'ORANGE_THEME',
    actTheme:'DARK_PURPLE_THEME',
    inputBg: 'DARK_PURPLE_THEME',
    boxed: false, // full screen content
    setBorderCard: false
};

export default config;