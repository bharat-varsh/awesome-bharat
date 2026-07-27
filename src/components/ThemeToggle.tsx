import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof document !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={isDark}
            onClick={(e) => {
                const nowDark = document.documentElement.classList.toggle('dark');
                setIsDark(nowDark);
            }}
        >
            <Sun className="hidden dark:block" aria-hidden="true" />
            <Moon className="block dark:hidden" aria-hidden="true" />
        </Button>
    );
}
