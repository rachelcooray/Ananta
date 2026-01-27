import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi } from 'vitest';
import Focus from './Focus';

// Mock framer-motion to avoid animation issues in jsdom
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
}));

describe('Focus Page', () => {
    it('renders the Focus page with correct content', () => {
        render(
            <HelmetProvider>
                <Focus />
            </HelmetProvider>
        );

        // Check for main heading in FocusAreas
        expect(screen.getByText('Sectors & Focus Areas')).toBeInTheDocument();

        // Check for some sectors
        expect(screen.getByText('Luxury and lifestyle brands, including fine jewellery')).toBeInTheDocument();
        expect(screen.getByText('Political communication and campaign environments')).toBeInTheDocument();

        // Check for subtitle
        expect(screen.getByText('Our Expertise')).toBeInTheDocument();
    });
});
