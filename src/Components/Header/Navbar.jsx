import React,{useEffect,useState} from 'react';
import '../../Styles/premium.css';
import '../../Pages/Home/onepage.css';

const links=[
  {href:'#about',label:'About'},
  {href:'#services',label:'Services'},
  {href:'#work',label:'Work'},
  {href:'#licensing',label:'Licensing'},
  {href:'#partnerships',label:'Partnerships'}
];

const Navbar=()=>{
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const onKeyDown=e=>{if(e.key==='Escape')setOpen(false)};
    document.addEventListener('keydown',onKeyDown);
    return()=>document.removeEventListener('keydown',onKeyDown);
  },[]);
  return <header className="di-header">
    <div className="di-container di-header-inner">
      <a href="#top" className="di-brand" aria-label="Develop-IQ Technologies, back to top">
        <span className="di-brand-mark" aria-hidden="true"><span /></span>
        <span className="di-brand-name">develop<span style={{color:'#347fed'}}>-iq</span><em>.</em></span>
      </a>
      <nav className="di-desktop-nav" aria-label="Main navigation">
        {links.map(l=><a key={l.href} className="di-nav-link" href={l.href}>{l.label}</a>)}
      </nav>
      <a href="#contact" className="di-nav-cta">Let's talk ↗</a>
      <button className="di-mobile-toggle" type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="di-mobile-navigation" aria-label={open?'Close menu':'Open menu'}>
        {open?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
      </button>
      <nav id="di-mobile-navigation" className={'di-mobile-menu'+(open?' open':'')} aria-label="Mobile navigation" aria-hidden={!open}>
        {links.map(l=><a href={l.href} key={l.href} tabIndex={open?0:-1} onClick={()=>setOpen(false)}>{l.label}</a>)}
        <a className="di-mobile-cta" href="#contact" onClick={()=>setOpen(false)} tabIndex={open?0:-1}>Let's talk ↗</a>
      </nav>
    </div>
  </header>;
};
export default Navbar;
