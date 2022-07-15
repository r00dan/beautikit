import { Button, ButtonThemes } from 'beautikit';

export function MainPage() {
  return (
    <div style={{ backgroundColor: '#000', height: '1000px' }}>
      MainPage
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem' }}>
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.CORN}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.CYAN}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.HONEY}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.MANGO}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.PINK}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.PURPLE_NAVI}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.ROSE}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.LIGHT_GREEN}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.TRANSPARENT_BLACK}
          onClick={() => { }}
        />
        <Button
          value={'ButtonThemes.CORN'}
          theme={ButtonThemes.TRANSPARENT_WHITE}
          onClick={() => { }}
        />
      </div>
    </div>
  );
}
