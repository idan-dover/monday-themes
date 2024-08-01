var forestTheme = {
  '--primary-color': '#228B22', // ForestGreen
  '--primary-on-secondary-color': '#228B22',
  '--primary-hover-color': '#2E8B57', // SeaGreen
  '--primary-selected-color': '#556B2F', // DarkOliveGreen
  '--primary-selected-hover-color': '#6B8E23', // OliveDrab
  '--primary-highlighted-color': '#2E8B57', // SeaGreen
  '--primary-text-color': '#F0FFF0', // Honeydew
  '--text-color-on-primary': '#FFFFFF', // White
  '--text-color-on-inverted': '#2F4F4F', // DarkSlateGray
  '--secondary-text-color': '#8FBC8F', // DarkSeaGreen
  '--placeholder-color': '#A9A9A9', // DarkGray
  '--icon-color': '#A9A9A9', // DarkGray
  '--link-color': '#6B8E23', // OliveDrab
  '--fixed-light-color': '#FFFFFF', // White
  '--fixed-dark-color': '#2F4F4F', // DarkSlateGray
  '--primary-background-color': '#556B2F', // DarkOliveGreen
  '--primary-background-hover-color': 'rgba(34, 139, 34, 0.3)', // ForestGreen with opacity
  '--secondary-background-color': '#228B22', // ForestGreen
  '--grey-background-color': '#228B22', // ForestGreen
  '--allgrey-background-color': '#228B22', // ForestGreen
  '--inverted-color-background': '#FFFFFF', // White
  '--disabled-text-color':
    'rgba(240, 255, 240, var(--disabled-component-opacity))', // Honeydew with opacity
  '--disabled-background-color': '#556B2F', // DarkOliveGreen
  '--positive-color': '#32CD32', // LimeGreen
  '--positive-color-hover': '#228B22', // ForestGreen
  '--positive-color-selected': '#006400', // DarkGreen
  '--positive-color-selected-hover': '#004d00', // DarkerGreen
  '--negative-color': '#8B0000', // DarkRed
  '--negative-color-hover': '#B22222', // FireBrick
  '--negative-color-selected': '#FF4500', // OrangeRed
  '--negative-color-selected-hover': '#CD5C5C', // IndianRed
  '--private-color': '#556B2F', // DarkOliveGreen
  '--shareable-color': '#2E8B57', // SeaGreen
  '--ui-border-color': '#6B8E23', // OliveDrab
  '--ui-background-color': '#556B2F', // DarkOliveGreen
  '--layout-border-color': '#556B2F', // DarkOliveGreen
  '--warning-color': '#FFD700', // Gold
  '--warning-color-hover': '#FFA500', // Orange
  '--warning-color-selected': '#FF8C00', // DarkOrange
  '--warning-color-selected-hover': '#FF7F50', // Coral
  '--brand-color': '#228B22', // ForestGreen
  '--brand-hover-color': '#2E8B57', // SeaGreen
  '--brand-selected-color': '#556B2F', // DarkOliveGreen
  '--brand-selected-hover-color': '#6B8E23', // OliveDrab
  '--text-color-on-brand': '#FFFFFF', // White
  '--box-shadow-xs': '0px 4px 6px -4px rgba(34, 139, 34, 0.5)', // ForestGreen with opacity
  '--box-shadow-small': '0px 4px 8px rgba(34, 139, 34, 0.5)', // ForestGreen with opacity
  '--box-shadow-medium': '0px 6px 20px rgba(34, 139, 34, 0.5)', // ForestGreen with opacity
  '--box-shadow-large': '0px 15px 50px rgba(34, 139, 34, 0.5)', // ForestGreen with opacity
  '--primary-hover-on-secondary-color': '#2E8B57', // SeaGreen
  '--primary-selected-color-rgb': '85, 107, 47', // DarkOliveGreen RGB
  '--primary-selected-on-secondary-color': '#556B2F', // DarkOliveGreen
  '--primary-text-on-secondary-color': '#F0FFF0', // Honeydew
  '--primary-background-color-rgb': '34, 139, 34', // ForestGreen RGB
  '--primary-background-hover-on-secondary-color': '#556B2F', // DarkOliveGreen
  '--secondary-background-color-rgb': '34, 139, 34', // ForestGreen RGB
  '--secondary-text-on-secondary-color': '#8FBC8F', // DarkSeaGreen
  '--link-on-secondary-color': '#6B8E23', // OliveDrab
  '--modal-background-color': '#228B22', // ForestGreen
  '--dark-background-color': '#2E8B57', // SeaGreen
  '--dark-background-on-secondary-color': '#556B2F', // DarkOliveGreen
  '--dialog-background-color': '#228B22', // ForestGreen
  '--label-background-color': '#556B2F', // DarkOliveGreen
  '--label-background-on-secondary-color': '#556B2F', // DarkOliveGreen
  '--icon-on-secondary-color': '#A9A9A9', // DarkGray
  '--placeholder-color-with-opacity': 'rgba(169, 169, 169, 0.1)', // DarkGray with opacity
  '--placeholder-on-secondary-color': '#A9A9A9', // DarkGray
  '--ui-border-on-secondary-color': '#6B8E23', // OliveDrab
  '--layout-border-on-secondary-color': '#556B2F', // DarkOliveGreen
  '--disabled-background-on-secondary-color': '#556B2F', // DarkOliveGreen
  '--disabled-text-on-secondary-color':
    'rgba(240, 255, 240, var(--disabled-component-opacity))', // Honeydew with opacity
  '--box-shadow-mediun': '0px 6px 20px rgba(34, 139, 34, 0.2)', // ForestGreen with opacity
  '--react-modal-background': 'rgba(34, 139, 34, 0.7)', // ForestGreen with opacity
  '--application-background-color': '#228B22', // ForestGreen
  '--application-border-color': '#556B2F', // DarkOliveGreen
  '--pulse-background-color': '#228B22', // ForestGreen
  '--pulse-background-color-rgb': '34, 139, 34', // ForestGreen RGB
  '--pulse-background-color-opacity': '#228B2280', // ForestGreen with opacity
  '--pulse-text-color': 'var(--text-color-on-inverted)', // DarkSlateGray
  '--pulse-hover-background-color': '#556B2F', // DarkOliveGreen
  '--pulse-selected-background-color': '#6B8E23', // OliveDrab
  '--pulse-highlight-background-color': '#6B8E23', // OliveDrab
  '--surfce-color': '#228B22', // ForestGreen
  '--surface-border-color': '#556B2F', // DarkOliveGreen
  '--card-background-color': 'var(--secondary-background-color)', // ForestGreen
  '--card-hover-background-color': '#556B2F', // DarkOliveGreen
  '--card-selected-background-color': '#6B8E23', // OliveDrab
  '--card-selected-text-color': 'var(--text-color-on-inverted)', // DarkSlateGray
  '--card-border-color': '#556B2F', // DarkOliveGreen
  '--automations-hover-background-color': '#6B8E23', // OliveDrab
  '--automations-label-background-color': '#6B8E23', // OliveDrab
  '--automations-border-color': '#556B2F', // DarkOliveGreen
  '--automations-account-usage-background-color': '#228B22', // ForestGreen
  '--automations-account-usage-dropdown-border-color': '#8FBC8F', // DarkSeaGreen
  '--automations-account-usage-progressbar-background-color': '#556B2F', // DarkOliveGreen
  '--apps-svg-icon-invert': 'invert(1)',
  '--apps-code-color': '#FFFFFF', // White
  '--apps-feature-preview-color': '#228B22', // ForestGreen
  '--apps-tabs-border-color': '#393b52', // DarkSlateGray
  '--text-color-on-card': 'var(--text-color-on-inverted)', // DarkSlateGray
  '--avatar-border-color': 'var(--text-color-on-inverted)', // DarkSlateGray
  '--modal-bottom-color': 'var(--surfce-color)', // ForestGreen
  '--modal-free-indication-color': 'var(--primary-selected-color)', // DarkOliveGreen
  '--notification-unread-highlight-color': '#6B8E23', // OliveDrab
  '--apps-marketplace-highlight-color': '#228B22', // ForestGreen
  '--redactor-context-background-color': '#228B22', // ForestGreen
  '--redactor-context-link-color': '#FFFFFF', // White
  '--ajax-spinner-gif-path':
    'url(https://cdn.monday.com/images/ajax_spinner_dark.gif)',
  '--scrollbar-color': 'var(--text-color-on-inverted)', // DarkSlateGray
  '--monday-loader-gif-path':
    'url(https://cdn.monday.com/images/loader/dark_loader.gif)',
  '--hint-background-color': '#228B22', // ForestGreen
  '--transparent-overlay': 'rgba(34, 139, 34, 0.5) !important', // ForestGreen with opacity
  '--avatar-background': 'rgba(73, 78, 103, 0.5)', // SlateBlue with opacity
  '--ai-modal-background': 'var(--secondary-background-color)', // ForestGreen
  '--ai-modal-border': 'var(--layout-border-color)', // DarkOliveGreen
  '--ai-modal-box-shadow': 'rgba(87, 174, 255, 0.16)', // CornflowerBlue with opacity
};

window.forestTheme = forestTheme;
