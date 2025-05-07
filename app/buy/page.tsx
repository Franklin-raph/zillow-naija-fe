"use client"

import React, { useEffect, useState, useRef, useCallback } from 'react'
import Navbar from '../components/nav-bar/Navbar'
import Footer from '../components/footer/Footer'
import { BiFilter, BiSearch } from 'react-icons/bi'
import FilterHomeCards from '../components/filter-home-cards/FilterHomeCards';
import { get } from '../utils/axiosHelpers';

// Define types for the listing and API response
interface HousePost {
  id?: string;
  name?: string;
  address?: string;
  number_of_bathrooms?: string;
  sqr_feet?: string;
  number_of_bedrooms?: string;
  price?: string;
  created_at: string;
  cover_image?: {
    media: string;
  };
  // Add other properties as needed
  [key: string]: any; // For any other properties that might exist
}

export default function Page() {
    const [listings, setListings] = useState<HousePost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);
    
    // Create a ref for our observer
    const observer = useRef<IntersectionObserver | null>(null);
    
    // Last element ref callback function
    const lastListingElementRef = useCallback((node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreListings();
        }
      });
      
      if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);

    // Initial listings fetch
    async function getListings(): Promise<void> {
      setIsLoading(true);
      try {
        const res = await get('/listings/');
        setListings(res.results);
        setNextPage(res.next);
        setHasMore(!!res.next);
      } catch (err) {
        console.error('Error fetching listings:', err);
        setListings([]); // Set empty array on error to avoid undefined issues
      } finally {
        setIsLoading(false);
      }
    }
    
    // Load more listings when scrolling
    async function loadMoreListings(): Promise<void> {
      if (!nextPage || isLoading) return;
      
      setIsLoading(true);
      try {
        // Extract the query part from the next URL
        const url = new URL(nextPage);
        const query = url.search; // This gives us ?limit=50&offset=50
        
        const res = await get(`/listings/${query}`);
        setListings(prevListings => [...prevListings, ...res.results]);
        setNextPage(res.next);
        setHasMore(!!res.next);
      } catch (err) {
        console.error('Error fetching more listings:', err);
      } finally {
        setIsLoading(false);
      }
    }
    
    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchTerm(e.target.value);
    };
    
    // Filter listings by search term
    const filteredListings = listings.filter(listing => 
      listing.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.address?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    useEffect(() => {
      getListings();
    }, []);

    return (
      <div>
        <Navbar />
        <div className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] py-[20px]">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 border py-2 px-2 rounded-full w-[400px]'>
                    <BiSearch />
                    <input 
                      type="text" 
                      className='outline-none w-full'
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search listings..."
                    />
                </div>
                <div className='flex items-center gap-1 cursor-pointer text-gray-600'>
                    <BiFilter className='text-[20px]'/>
                    <p>Filter</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-start pb-8 px-[2rem] lg:flex-row flex-col-reverse'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center gap-5'>
                {filteredListings.map((listing, index) => {
                    if (filteredListings.length === index + 1) {
                        // Add ref to the last element
                        return (
                            <div key={index} ref={lastListingElementRef}>
                                <FilterHomeCards listing={listing} />
                            </div>
                        );
                    } else {
                        return <FilterHomeCards key={index} listing={listing} />;
                    }
                })}
            </div>
        </div>
        {isLoading && (
          <div className="flex justify-center py-4">
            <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
          </div>
        )}
        <Footer />
      </div>
    )
}