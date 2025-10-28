#!/bin/bash

# Script to update all CTAs from booking language to request language
# This reflects Good Hands as a concierge/curation service, not instant booking platform

echo "🔄 Updating CTAs from 'Book' to 'Request' language..."

cd "$(dirname "$0")/.."

# Common CTA text replacements
declare -A replacements=(
    ["Book Now"]="Request Consultation"
    ["Book Your"]="Request Your"
    ["Reserve Your Session"]="Request Consultation"
    ["Reserve Your Experience"]="Request Your Experience"
    ["Book This Service"]="Request This Service"
    ["Start Booking"]="Start Request"
    ["Complete Booking"]="Submit Request"
    ["Confirm Booking"]="Submit Request"
    ["Booking Confirmed"]="Request Submitted"
    ["Your Booking"]="Your Request"
    ["booking confirmed"]="request submitted"
    ["book your appointment"]="submit your request"
    ["reserve your spot"]="request your spot"
)

# Update app files
for key in "${!replacements[@]}"; do
    value="${replacements[$key]}"
    echo "Replacing '$key' with '$value'..."
    find app -name "*.tsx" -type f -exec sed -i '' "s/$key/$value/g" {} \;
done

# Update component files
echo "Updating components..."
for key in "${!replacements[@]}"; do
    value="${replacements[$key]}"
    find components -name "*.tsx" -type f -exec sed -i '' "s/$key/$value/g" {} \; 2>/dev/null
done

echo "✅ CTA updates complete!"
echo ""
echo "Next steps:"
echo "1. Review changes with: git diff"
echo "2. Test build: npm run build"
echo "3. Commit: git add . && git commit -m 'Update CTAs to request-based language'"

