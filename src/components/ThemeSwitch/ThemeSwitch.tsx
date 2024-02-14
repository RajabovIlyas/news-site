import { SiteTheme } from '@/enums/site-theme.enum';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === SiteTheme.SYSTEM ? systemTheme : theme;

  const changeTheme = () => {
    const newTheme =
      theme === SiteTheme.LIGHT ? SiteTheme.DARK : SiteTheme.LIGHT;
    setTheme(newTheme);
  };

  return (
    <div className='toggle-switch'>
      <label className='switch-label'>
        <input
          type='checkbox'
          checked={currentTheme === SiteTheme.LIGHT}
          className='checkbox'
          onChange={changeTheme}
        />
        <span className='slider'></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
