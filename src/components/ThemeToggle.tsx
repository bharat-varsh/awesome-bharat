import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => {
                document.documentElement.classList.toggle('dark');
            }}
        >
            <Sun className="hidden dark:block" />
            <Moon className="block dark:hidden" />
        </Button>
    );
}
