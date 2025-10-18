
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-400 transition-colors duration-300">
        {children}
    </a>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.002 6.363a4.648 4.648 0 100 9.296 4.648 4.648 0 000-9.296zM12 15.42a3.42 3.42 0 110-6.84 3.42 3.42 0 010 6.84zM16.92 7.577a1.182 1.182 0 100-2.364 1.182 1.182 0 000 2.364z" clipRule="evenodd" /></svg>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-950">
            <div className="container mx-auto px-6 py-12">
                <div className="md:flex md:justify-between md:items-center">
                    <div className="text-2xl font-bold tracking-wider mb-6 md:mb-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Wow Graphic
                    </div>
                    <div className="flex space-x-6">
                        <SocialIcon href="#"><InstagramIcon /></SocialIcon>
                        <SocialIcon href="#">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.642 1.042a.483.483 0 01.44.225l.024.05.025.051a.51.51 0 01.038.103l.013.045c.03.111.037.231.022.355l-.022.176-.02.145c-.219 1.54-.5 2.946-.82 4.227-.225.89-.48 1.76-1.074 2.656-.632.95-1.6 1.76-2.923 2.395-1.92 1.01-4.63 1.28-7.23.51l-.22-.063-.112-.033a.51.51 0 01-.26-.814l.03-.047.034-.04a.485.485 0 01.378-.17l.11-.002c1.41-.03 2.67-.18 3.79-.44 1.94-.45 3.1-1.39 3.52-2.85.06-.21.1-.42.14-.64.12-.6.2-1.22.25-1.85.06-.78.07-1.57.02-2.35-.06-1.02-.2-1.99-.4-2.91a.483.483 0 01.226-.532l.09-.044.09-.035c.16-.06.34-.05.49.03zm4.28 2.298a.483.483 0 01.44.225l.024.05.025.051a.51.51 0 01.038.103l.013.045c.03.111.037.231.022.355l-.022.176-.02.145c-.219 1.54-.5 2.946-.82 4.227-.225.89-.48 1.76-1.074 2.656-.632.95-1.6 1.76-2.923 2.395-1.92 1.01-4.63 1.28-7.23.51l-.22-.063-.112-.033a.51.51 0 01-.26-.814l.03-.047.034-.04a.485.485 0 01.378-.17l.11-.002c1.41-.03 2.67-.18 3.79-.44 1.94-.45 3.1-1.39 3.52-2.85.06-.21.1-.42.14-.64.12-.6.2-1.22.25-1.85.06-.78.07-1.57.02-2.35-.06-1.02-.2-1.99-.4-2.91a.483.483 0 01.226-.532l.09-.044.09-.035c.16-.06.34-.05.49.03z"></path></svg>
                        </SocialIcon>
                         <SocialIcon href="#">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.5 5.5v13a2 2 0 01-2 2H3.5a2 2 0 01-2-2V5.5a2 2 0 011.08-1.787l8-4.5a2 2 0 011.84 0l8 4.5A2 2 0 0122.5 5.5zM12 12.31L3.9 7.422V18.5h16.2V7.422L12 12.31zM11.383 11.233l-7.3-4.103 7.3 4.103zm1.234 0l7.3-4.103-7.3 4.103z"></path></svg>
                        </SocialIcon>
                    </div>
                </div>
                <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Wow Graphic. All Rights Reserved. Where Vision Becomes Iconic.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
